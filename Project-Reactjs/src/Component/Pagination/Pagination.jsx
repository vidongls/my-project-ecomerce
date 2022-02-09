import { React, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Paginations = ({ productPerPage, totalProduct, paginate }) => {
  const pageNumbers = []
  const [page, setPage] = useState(1)
  const handleChange = (event, value) => {
    setPage(value)
    paginate(value)
  }
  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <ul className="pagination">
        <Stack spacing={2}>
          <Pagination
            count={pageNumbers.length}
            page={page}
            onChange={handleChange}
            variant="outlined"
            sx={{
              '& ul': { alignItems: 'center', justifyContent: 'center' },
              '& button.Mui-selected': {
                background: '#fe4536',
                color: '#fff',
                borderColor: '#fe4536',
                '&:hover': {
                  backgroundColor: '#fe4536',
                },
              },
            }}
          />
        </Stack>
      </ul>
    </>
  )
}

export default Paginations
