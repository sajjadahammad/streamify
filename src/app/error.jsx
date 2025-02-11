"use client"

import { motion } from "framer-motion"
import { FileQuestion, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function error() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-[#130F40] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <FileQuestion className="mx-auto text-blue-500" size={64} />
        </motion.div>
        <h1 className="mt-8 text-4xl font-bold text-gray-900 dark:text-gray-100">An Error Occured</h1>
        <p className="mt-4 text-xl text-gray-600">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" passHref>
          <Button className="mt-8" size="lg">
            <Home className="mr-2" size={20} />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
