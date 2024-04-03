// import React from 'react'
import React , {useState} from 'react'

export default function Abt() {



  const [mysty, setmysty] = useState(
    {
      color : 'black',
      backgroundColor : 'white'
      
    }
  )
  const [btntxt, setbtntxt] = useState("Enable dark Mode")
  const toogle=() =>{
    if(mysty.color== 'black' )
    {
      setmysty(
        {
          color: 'white',
          backgroundColor : 'black',
        }
      )
      setbtntxt("Enable Light Mode")
    }
    else{
      setmysty(
        {
          color: 'black',
          backgroundColor : 'white',
        }
      )
      setbtntxt("Enable dark Mode")
    }
  }

  return (
    <div>
      <div className="container" style={mysty} >
        <div className="accordion conatiner" id="accordionPanelsStayOpenExample" style={mysty} >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={mysty} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" style={mysty}>
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={mysty} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" style={mysty}>
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={mysty}  data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" style={mysty}>
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <button className="btn btn-primary" onClick={toogle}>{btntxt}</button>
    </div>
    </div>
  );
}
