import React, { useContext } from 'react';
import { Box } from 'components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { SearchContext } from 'context'

function Search() {
  const [ searchParam , setSearchParam ] = useContext(SearchContext)

  return (
    <Box className="flex flex-bottom">
      <input
        onChange={(e) => setSearchParam({ param: e.target.value })}
        name="search"
        style={{ outline: 'none' }}
        placeholder="Search"
        className="bb bn bg-primary fs-4 c-white px-1 py-1 bw-2 bc-white mr-2"
        name="search_input" />
      <FontAwesomeIcon className="c-white c-pointer" icon={faSearch} style={{ fontSize: '20px' }} />
    </Box>
  )
}
export default Search