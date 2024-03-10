import { Box, Stack } from '@mui/material';
import { categories } from '../utils/constants';
import react from 'react'

const Sidebar = ({ selectedCategory, set_selectedCategory }) => {
    return (
        <>
            <Stack direction={"row"}
                sx={{
                    overflowY: "auto",
                    height: { sx: "auto", md: "95%" },
                    flexDirection: { md: "column" }
                }}>
                {categories.map((category) => (
                    <button className='category-btn' style={{ background: category.name === selectedCategory ? "#0077b5" : "transparent", color: "white" }} key={category.name} onClick={() => { set_selectedCategory(category.name) }}>
                        <span style={{ color: "white", marginRight: "15px" }}>{category.icon}</span>
                        <span style={{ color: "white", opacity: category.name !== selectedCategory ? "0.4" : "1" }}>{category.name}</span>
                    </button>))}

            </Stack>
        </>
    );
}

export default Sidebar