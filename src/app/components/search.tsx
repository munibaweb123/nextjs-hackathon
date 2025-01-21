'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export default function ProductSearchForm() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search page with query parameter
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input 
        type="search"
        placeholder="Search products..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit"><Search/></Button>
    </form>
  )
}
