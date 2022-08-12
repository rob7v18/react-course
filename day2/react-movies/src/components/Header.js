
// The argument can be a prop (a js object) that contains anything we passed from outside into it
// we can name it whatever we want but typically the parameter is named "prop". Since it's just a
// js object, we can use object destructuring too!
function Header({ size, dayTitle}) {

    const thing = ["HOME", "WORLD", "CAVE"];

    const randomIndex = Math.floor(Math.random() * thing.length);

    const styleObject = {
        backgroundColor: "blue",
        border: "5px solid red",
        color: "white",
    };


  return (
    <>
        {/* if sibling tags, then it must have some parent!  */}
        <h1 style={styleObject}>This is my {thing[randomIndex]}!</h1>
        <h2>Today is {dayTitle}</h2>
    </>

  )
}

export default Header