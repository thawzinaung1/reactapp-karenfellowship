import React, {useState} from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap'

function RenderCarousel({group}){

    const[activeIndex, setActiveIndex] = useState(0);
    const[animating, setAnimating] = useState(false);
    const next= () => {
        const nextIndex = activeIndex === group.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        const nextIndex = activeIndex === 0 ? group.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        setActiveIndex(newIndex);
    }

    const slides = group.map((pic) => {
        return(
            <CarouselItem key={pic.id} onExiting={()=>setAnimating(true)} onExited={()=> setAnimating(false)}>
                <img src={pic.image} alt={pic.name} className="img-fluid"/>
                <CarouselCaption className="text-primary" captionHeader ={pic.description}/>
            </CarouselItem>
        )
    })

    return(
    <div className="my-md-5">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators items={group} activeIndex={activeIndex} onClickHandler={goToIndex}></CarouselIndicators>
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}></CarouselControl>
          <CarouselControl direction="next" directionText="Next" onClickHandler={next}></CarouselControl>
      </Carousel>
    </div>
    )
}

function Home(props){
    return(
        <div className="container my-3">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <RenderCarousel  group={props.group}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
