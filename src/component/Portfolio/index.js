import  {Portfoliosec,Title,Span,List,Item,ImageWrapper,Img,Overlay,Overlayspan} from'./style.js'

const Portfolio = ()=>
{

    return(
        < Portfoliosec>
        <Title><Span>My</Span> Portfolio</Title>
        <List>
            <Item  active>All</Item>
            <Item>HTML</Item>
             <Item>Photoshop</Item>
            <Item>Wordpress</Item>
            <Item>Mobile</Item>
        </List>
        
        <div className="Box" >
       
        <ImageWrapper >
            <Img src= "../../images/portfolio-img1.jpg"/>
            <Overlay>
                <Overlayspan>
                    Show Image
                </Overlayspan>
            </Overlay>
        </ImageWrapper>

        <ImageWrapper >
            <Img src= "../../images/portfolio-img2.jpg"/>
            <Overlay>
                <Overlayspan>
                    Show Image
                </Overlayspan>
            </Overlay>
        </ImageWrapper>

        <ImageWrapper >
            <Img src= "../../images/portfolio-img3.jpg"/>
            <Overlay>
                <Overlayspan>
                    Show Image
                </Overlayspan>
            </Overlay>
        </ImageWrapper>

        <ImageWrapper >
            <Img src= "../../images/portfolio-img4.jpg"/>
            <Overlay>
                <Overlayspan>
                    Show Image
                </Overlayspan>
            </Overlay>
        </ImageWrapper>

        <ImageWrapper >
            <Img src= "../../images/portfolio-img5.jpg"/>
            <Overlay>
                <Overlayspan>
                    Show Image
                </Overlayspan>
            </Overlay>
        </ImageWrapper>

        <ImageWrapper >
            <Img src= "../../images/portfolio-img6.jpg"/>
            <Overlay>
                <Overlayspan>
                    Show Image
                </Overlayspan>
            </Overlay>
        </ImageWrapper>

        <ImageWrapper >
            <Img src= "../../images/portfolio-img7.jpg"/>
            <Overlay>
                <Overlayspan>
                    Show Image
                </Overlayspan>
            </Overlay>
        </ImageWrapper>

        <ImageWrapper >
            <Img src= "../../images/portfolio-img8.jpg"/>
            <Overlay>
                <Overlayspan>
                    Show Image
                </Overlayspan>
            </Overlay>
        </ImageWrapper>
        </div>
        
    </Portfoliosec>
    )
}
export default Portfolio;