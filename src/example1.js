import React from 'react';
const Mess=({val})=> {
 if (val >=10)
 {    return <p>больше или равно 10</p>}
 else { return <p>меньше 10</p>}

}

const App1=() => {
    const  val1=9
return (
    <div>
    <h3>Пример 1</h3>
    <Mess val={10}/>

    <h3>Пример 2</h3>
{val1>=10 ? <p>Число больше или равно 10</p> :<p>меньше 10</p>  }

{val1 && <p>если есть переменная</p>   }
</div>
    );
}

export default App1