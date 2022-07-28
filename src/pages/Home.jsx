import { Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import React, { useEffect, useState } from "react";
import { MediaCard } from "../Componets/Card";
import { useFetchProducts } from "../hook/fetchProducts";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinearProgress from '@mui/material/LinearProgress'
import axios from "axios";



export const Home = () => {
    const [page, setPage] = useState(1);
  const [products ,setProducts]=useState([])
    const [load, setLoad] = useState(false);
    const [erro, setErro] = useState(false);

    const [sort, setSort] = useState("");
    const { loading, error, data } = useFetchProducts("http://localhost:8000/products", page)

const handleSort =(value)=>{
    console.log(value,"vaa");
    setSort(value);
    setLoad(true);
    axios({
      method: "get",
      url: `http://localhost:8000/products?_page=${page}&_limit=12&_sort=price&_order=${value}`
    }).then((res) => {
      setProducts(res.data);
      setLoad(false);
      console.log(res.data)
    }).catch((err) => {
      console.log(err);
      setLoad(false)
      setErro(true);
    })
  }
  




    useEffect(() => {
        setLoad(true);
        axios({
            method: "get",
            url: `http://localhost:8000/products?_page=${page}&_limit=12` 
        }).then((res) => {
            setProducts(res.data);
            setLoad(false);
            //console.log(products)
        }).catch((err) => {
            console.log(err);
            setLoad(false)
            setErro(true);
        })
       
    }, [page])

    return (
 

        loading ?   <LinearProgress />
            : error ? <h2>Somthing went Wrong</h2>
                : <React.Fragment> 
<br />
<br />
<FormControl halfWidth>
              <InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
              <br />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Age"
                onChange={(e) => {handleSort(e.target.value)}}
              >
                <MenuItem value={""}>No Sorting</MenuItem>
                <MenuItem value={"asc"}>High To Low</MenuItem>
                <MenuItem value={"desc"}>Low To High</MenuItem>
              </Select>
            </FormControl>


                         <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px", padding: "20px" }}>
                    {products.map(el => <div key={el.id} className="card_container"><MediaCard  {...el} />
                </div>)}
                </div>
                    <div className="btnsFlex_Pagination">

                        <Button disabled={page === 1}  variant="contained" onClick={() => setPage(prev => prev - 1)}>
                            <ArrowBackIosNewIcon />
                        </Button>



                        <Button variant="contained">
                            {page}
                        </Button>

                        <Button disabled={products.length < 12} variant="contained" onClick={() => setPage(prev => prev + 1)}>
                            <KeyboardArrowRightIcon />
                        </Button>
                    </div>

                </React.Fragment>




    )
}