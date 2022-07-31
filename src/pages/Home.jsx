import { Button,  } from "@mui/material";
import React, {  useState } from "react";
import { MediaCard } from "../Componets/Card";
import { useFetchProducts } from "../hook/fetchProducts";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinearProgress from '@mui/material/LinearProgress'
// import axios from "axios";



export const Home = () => {
    const [page, setPage] = useState(1);
    //     const [load, setLoad] = useState(false);
    //     const [erro, setErro] = useState(false);

      const [sortRating ,setSortRating]=useState([])
    const [sort, setSort] = useState(null);
    const { loading, error, data } = useFetchProducts("http://localhost:8000/products", page,sort,sortRating)


    //price sorting function 
const handleSort =(type)=>{
  if(sort ===type){
    setSort(null)
    return;
  }
  setSort(type)
}

// Rating sorting function 
const handleFilter =(type)=>{

if(sortRating.includes(type)){
  const updatedFilter = [...sortRating].filter(el => el !== type);
  setSortRating(updatedFilter)
  
  return;
}
setSortRating(prev => [...prev, type])
}

//   console.log(data ,"dji")
// const handleSort =(value)=>{
//     console.log(value,"vaa");
//     setSort(value);
//     setLoad(true);
//     axios({
//       method: "get",
//       url: `http://localhost:8000/products?_page=${page}&_limit=12&_sort=price&_order=${value}`
//     }).then((res) => {
//       setProducts(res.data);
//       setLoad(false);
//       console.log(res.data)
//     }).catch((err) => {
//       console.log(err);
//       setLoad(false)
//       setErro(true);
//     })
//   }
  
  // const handleRating =(value)=>{
  //   console.log(value,"vaa");
  //   setSort(value);
  //   setLoad(true);
  //   axios({
  //     method: "get",
  //     url: `http://localhost:8000/products?_page=${page}&_limit=12&_sort=rating&_order=${value}`
  //   }).then((res) => {
  //     setProducts(res.data);
  //     setLoad(false);
  //     console.log(res.data)
  //   }).catch((err) => {
  //     console.log(err);
  //     setLoad(false)
  //     setErro(true);
  //   })
  // }




    // useEffect(() => {
    //     setLoad(true);
    //     axios({
    //         method: "get",
    //         url: `http://localhost:8000/products?_page=${page}&_limit=12` 
    //     }).then((res) => {
    //         setProducts(res.data);
    //         setLoad(false);
    //         //console.log(products)
    //     }).catch((err) => {
    //         console.log(err);
    //         setLoad(false)
    //         setErro(true);
    //     })
       
    // }, [page   ])

    return (
 
    
        loading ?   <LinearProgress />
            : error ? <h2>Somthing went Wrong</h2>
                : <React.Fragment> 
                
<br />
<br />
{/* <FormControl halfWidth>
              <InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
              <br />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Age"
                onChange={(e) => {handleSort(e.target.value)}}
              >
                <MenuItem  Select value={""}>No Sorting</MenuItem>
                <MenuItem value={"asc"}>Low To High</MenuItem>
                <MenuItem value={"desc"}>High to low</MenuItem>
              </Select>
            </FormControl> */}

            {/* <FormControl halfWidth>
              <InputLabel id="demo-simple-select-label">Sort By Rating</InputLabel>
              <br />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Age"
                onChange={(e) => {handleRating(e.target.value)}}
              >
                <MenuItem value={""}>No Sorting</MenuItem>
                <MenuItem value={"asc"}>Low To High</MenuItem>
                <MenuItem value={"desc"}>High to low</MenuItem>
              </Select>
            </FormControl>  */}
            <div className="priceSorting">
              <h3>Sort by price</h3>
            <Button onClick={()=>handleSort("asc")} variant={ sort !=="asc" ?"contained" :"outlined"}>Asc</Button>
            <Button onClick={()=>handleSort("desc")} variant={ sort !=="desc" ?"contained" :"outlined"}>desc</Button>
         

            <h3>Sort By Rating</h3>
        
           
            <Button onClick={()=>handleFilter(4)} variant={ sortRating.includes(4) ?"contained" :"outlined"}>5 to 4</Button>
            <Button onClick={()=>handleFilter(3)} variant={ sortRating.includes(3) ? "contained" :"outlined"}>4 to 3</Button>
            <Button onClick={()=>handleFilter(2)} variant={ sortRating.includes(2) ?"contained" :"outlined"}>3 to 2</Button>
            <Button onClick={()=>handleFilter(1)} variant={ sortRating.includes(1) ?"contained" :"outlined"}>2 to 2 </Button>
            </div>

        


                         <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", padding: "20px" }}>
                    {data.map(el => <div key={el.id} className="card_container"><MediaCard  {...el} />
                </div>)}
                </div>
                    <div className="btnsFlex_Pagination">

                        <Button disabled={page === 1}  variant="contained" onClick={() => setPage(prev => prev - 1)}>
                            <ArrowBackIosNewIcon />
                        </Button>



                        <Button variant="contained">
                            {page}
                        </Button>

                        <Button disabled={data.length <10} variant="contained" onClick={() => setPage(prev => prev + 1)}>
                            <KeyboardArrowRightIcon />
                        </Button>
                    </div>

                </React.Fragment>




    )
}