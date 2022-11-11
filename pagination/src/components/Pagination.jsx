import React from "react";

export default function Pagination(props) {
  const itemsPerPage = 9;
  const pagesTotal = Math.ceil(props.length / itemsPerPage);

  //creating new array with length of total pages
  /*arrayOfArrays =[
        //basicly 12 arrays if pagesTotal is 12
      [],[],[],[],[],[],[],[],[],[],[],[],
  ]
  */
  //   console.log(props.slice(0, 10));
  const arrayOfArrays = Array.from({ length: pagesTotal });
  arrayOfArrays.fill([]);
  //   console.log(arrayOfArrays);
  const arraysPopulated = arrayOfArrays.map((array, index) => {
    const slicedarray = props.slice(
      index * itemsPerPage,
      (index + 1) * itemsPerPage
    );
    return slicedarray;
  });
  return { arraysPopulated };
}
