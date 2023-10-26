import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // valorant
    console.log(newCategory);
    // categories.push("valorant");
    if (categories.includes(newCategory)) {
      return;
    }
    // setCategories([...categories, "Valorant"]);
    // categories.push(newCategory);
    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, "Valorant"]);
  };

  return (
    <>
      {/*titulo */}
      <h1>GifExpertApp</h1>

      {/*Input */}
      <AddCategory
        // onNewCategory={(event) => categories(event)}

        onNewCategory={(value) => onAddCategory(value)}

        //  setCategories={setCategories}
      />

      {/*Listado de Gif */}
      {/* <button onClick={onAddCategory}>agregar</button> */}
      {/* <ol> */}
      {
        // categories.map((category) => {
        //   return (
        //     <div key={category}>
        //       <h3>{category}</h3>
        //       <li>{category}</li>
        //     </div>
        //   );
        // })

        // categories.map((category) => (
        //   <div key={category}>
        //     <h3>{category}</h3>
        //     <li>{category}</li>
        //   </div>
        // ))
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
      {/* </ol> */}
      {/*Gif Item*/}
    </>
  );
};
