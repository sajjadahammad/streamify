import { render, screen, fireEvent, within } from "@testing-library/react";
import StreamTable from "../../components/data-table/StreamTable";
import "@testing-library/jest-dom";

// ✅ Mock Data (Same Structure as API Response)
const mockData = {
    topSongs: [
        { name: "Cruel Summer", artist: "Taylor Swift", streams: 1200000, avgDuration: 178, skippedRate: 0.12 },
        { name: "vampire", artist: "Olivia Rodrigo", streams: 1000000, avgDuration: 215, skippedRate: 0.15 },
        { name: "Kill Bill", artist: "SZA", streams: 900000, avgDuration: 153, skippedRate: 0.14 },
    ],
};

describe("StreamTable Component", () => {
    test("renders table with correct headers", () => {
        render(<StreamTable data={mockData} />);


        expect(screen.getByText("Song")).toBeInTheDocument();
        expect(screen.getByText("Artist")).toBeInTheDocument();
        expect(screen.getByText("Streams")).toBeInTheDocument();
        expect(screen.getByText("Duration (sec)")).toBeInTheDocument();
        expect(screen.getByText("Skipped Rate")).toBeInTheDocument();
    });

    test("renders table rows with song data", () => {
        render(<StreamTable data={mockData} />);

        expect(screen.getByText("Cruel Summer")).toBeInTheDocument();
        expect(screen.getByText("Taylor Swift")).toBeInTheDocument();

        expect(screen.getByText("vampire")).toBeInTheDocument();
        expect(screen.getByText("Olivia Rodrigo")).toBeInTheDocument();
    });

    test("filters songs based on search input", () => {
        render(<StreamTable data={mockData} />);

        const searchInput = screen.getByPlaceholderText("Search Song");


        fireEvent.change(searchInput, { target: { value: "Cruel" } });

    
        expect(screen.getByText("Cruel Summer")).toBeInTheDocument();
        expect(screen.queryByText("vampire")).not.toBeInTheDocument();
        expect(screen.queryByText("Kill Bill")).not.toBeInTheDocument();
    });

    test("pagination buttons work correctly", () => {
        render(<StreamTable data={{ topSongs: [...mockData.topSongs, ...mockData.topSongs] }} />);

        const nextButton = screen.getByRole("button", { name: /next/i });
        const prevButton = screen.getByRole("button", { name: /previous/i });

        expect(prevButton).toBeDisabled();


        fireEvent.click(nextButton);

    
        expect(prevButton).not.toBeDisabled();
    });

    test("shows loading message when data is undefined", () => {
        render(<StreamTable data={undefined} />);
        expect(screen.getByText("Loading songs...")).toBeInTheDocument();
    });

    test("shows 'No songs found' when data is empty", () => {
        render(<StreamTable data={{ topSongs: [] }} />);
        expect(screen.getByText("No songs found")).toBeInTheDocument();
    });
});
