# **Getting Started**  
This project is built with **Next.js 15**.  

### **🚀 Setup**  
Run the following commands to start the development server:  
```sh
npm install  
npm run dev  
```  
The app will be accessible at **[http://localhost:3000](http://localhost:3000)**.  

---

## **📦 Libraries Used**  

- **Tailwind CSS** → For styling.  
- **ShadCN UI** → Used as the component library due to its flexibility and wide range of components.  

---

## **📊 Data Fetching**  

- Initially, **JSON Server** was used, but deployment issues led to switching to **Next.js API routes** for handling data.  
- **All data is fetched on the server side** to improve performance, ensure faster page loads, and reduce the need for additional client-side fetching libraries.  
- If client-side fetching becomes necessary, **React Query** would be the preferred choice.  

---

## **🗂️ State Management**  

- So far, **global state management hasn’t been needed** since the app’s data requirements are localized.  
- If the project scales and **state needs to be shared across multiple components**, a state management solution like **Zustand** or **Redux** may be considered.  

---

## **🧪 Testing**  

- **Testing is currently incomplete** as it's a new area of exploration.  
- Most of the tests were implemented based on references, but **some issues still need to be resolved**.  

---

### **🛠️ Next Steps**
- Improve **test coverage** and fix Jest setup issues.  
- Optimize **state management** if the app grows.  
- Explore **client-side caching** with React Query if necessary.  

