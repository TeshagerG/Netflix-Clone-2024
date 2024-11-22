// import React from 'react'
// import "./RowList.css"
// import Row from '../Row/Row'
// import Requests from '../../../Utils/Requests'

// const RowList = () => {
//   return (
//     <div>
//       <>
//       <Row
//        title="NETFLIX ORGINALS"
//        fetchUrl={Requests.fetchNetflixOriginals}
//        isLargeRow={true}
//       />
     
   
//       </>
//     </div>
//   )
// }

// export default RowList


import React from "react";
import Row from "../Row/Row";
import Requests from "../../../Utils/Requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchUrl={Requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;