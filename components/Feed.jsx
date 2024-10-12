"use client"

import React, { useState, useEffect } from 'react'
import PromptCard from './PromptCard'
import { postcss } from 'autoprefixer'



const PromptCardList = ({
  data, handleTagClick
}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard key={post._id} post={post} handleTagClick={handleTagClick}></PromptCard>
      ))}
    </div>
  )
}

const Feed = () => {

  const [searchText, SetSearchText] = useState('')
  const [posts, setPosts] = useState([])
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);


  const handleSearchChange = (e) => {

    SetSearchText(e.target.value)


    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const filteredPosts = posts.filter((post) =>
          post.tag.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(filteredPosts)
      }, 500))







  }


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt',{ cache: 'no-store' });
      const data = await response.json();

      setPosts(data)
    }

    fetchPosts();
  }, [])


  return (
    <section className='feed'>


      <form className='relative w-full flex-center gap-4'>
        <input
          type="text"
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        ></input>
        <button>search</button>
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
        // handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts}
        // handleTagClick={handleTagClick} 

        />
      )}

    </section>
  )
}

export default Feed
