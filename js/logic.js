/* ---------------- Search Module ------------------ */


/* ---------------- (Local Search) ------------------ */
  
    
   const search = {
    LocalSearch:    (arr , str )=>{
        return arr.filter((ele)=>{
                return ele.title.toLowerCase().includes(str.toLowerCase());
        })
    }
   }


module.exports = search;