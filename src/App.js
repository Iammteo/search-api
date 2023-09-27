import { useState } from "react";
import SearchBar from "./components/searchBar";
import searchImages from "./api";
import imageList from "./components/imageList";
import ImageList from "./components/imageList";


function App() {
const [images , setImages] = useState([]);

const handleSubmit = async (term) => {


const result =  await searchImages(term);
    
 setImages(result);
};

return (
<div>
    <SearchBar onSubmit={handleSubmit} />
    <ImageList images={images} />

</div>
);
}

export default App;