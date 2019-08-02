const http = require('http');
const fs = require('fs');
const pass = require('path');
const carsJson = require('./cars.json');



const server = http.createServer((req, res) => {
       let model = null;
        let photo = null;
        let  price =null;
        let description = null;

        const headerAndStyle = `<html><head><meta charset="UTF-8"><title>Choose Car</title>
            <style>
            *{
            margin:0; padding:0;
            }
            img{
                border:0;
                }	
            body{
                background:#edece8;
                }	
            .main{
                width:970px; margin:0 auto;
                }
            .head{
                height:80px;
            }
            .head h2{
                font:normal 24px "Century Gothic"; float:left; color:#a73700; margin-top:10px;
                }
            .head a{
                font:normal 26px "Century Gothic"; float:right; color:#716b5b; text-decoration:none; margin:20px 10px 0 0;
                }	
		.head a span{
			color:#a73700;
            }	
        content-main{
		background:#f7f7f7; border:1px solid #fff; overflow:hidden; 
		border-radius: 15px;
		-moz-border-radius: 15px;
		-webkit-border-radius: 15px;
		}	
	.content{
		width:700px; float:left; margin:0 0 0 20px;
		}		
		.post-main{
			background:#f5f5f5; border:1px solid #e7e2e3; margin:0 0 20px 0;
			border-radius: 8px;
			-moz-border-radius: 8px;
			-webkit-border-radius: 8px;
			}
			.imgstyle{
				float:left; margin:0 15px 15px 0;
				}
			.post-main h1{
				background:#e2e0e1; font:normal 24px Verdana; color:#3f282f; padding: 5px 0 8px 15px; margin: 0 0 5px 0;
				border-radius: 8px 8px 0 0;
					}
				.post-main h1 a{
					font:normal 24px Verdana; color:#3f282f; text-decoration:none;
					}
				.post-main h1 a:hover{
					font:normal 24px Verdana; color:#3f282f; text-decoration:underline;
                    }
                .post-main h1 span{
					font:normal 24px Verdana; color:#3f282f; text-alighn: right;
					}	
				.post{
				margin: 0 15px 15px;
				}		
			.post p{
				font:12px Verdana; margin: 0 0 15px;
				}
			.post a{
				color:#3f282f; text-decoration:underline;
				}	
			.post a:hover{
				color:#3f282f; text-decoration:none;
                }
            .footer{
	overflow:hidden; padding: 30px 25px;
	}
	.cpy{
		float:left;
		}					
	.cpy a{
		font:normal 26px "Century Gothic"; color:#716b5b; text-decoration:none; margin:20px 10px 0 0;
		}	
	.cpy a span{
		color:#a73700;
		}
	.cpy p{
		font:14px verdana; color:#000; line-height:1.1; margin:10px 0 0 0;
		}			
                   </style>
                   </head><body> 
                   <div class="main">
	<div class="head">
		<h2>Choose your <br />Car</h2>
		<a href="/"><span>C</span>hoose <span>C</span>ar</a>
	</div>
    <div class="content-main">`

const footer = `<div class="footer">
		<div class="cpy">
			<a href="/"><span>C</span>hoose <span>C</span>ar</a>
			<p>Choose Car 2019<br />
			All rights reserved.<br />
			Email: contact@chooseCar.ua</p>
		</div>
		
		</div>				
        </body></html>`



    //main page
    if(req.url===`/`){ 
         res.writeHead(200, {"Content-Type" : "text/html"});




            res.write(headerAndStyle);
        //cars block
       for (i=0; i<carsJson.cars.length; i++) {
            model = carsJson.cars[i].model;
            photo = carsJson.cars[i].photo;
            price = carsJson.cars[i].price;
            description = carsJson.cars[i].description;
            console.log(model);
             
     res.write(`<div class="post-main">
				<h1><a href="http://localhost:3000/${i}">`+ model + `</a> <span>` + price + `</span></h1>
				<div class="post">
					<img src="`+ photo + `" class="imgstyle" width="400px" alt="` + model + `" />
					<p>` + description + `</p>

<p><a href="http://localhost:3000/${i}">More info</a></p>
			</div>
			</div>`);
       }
   
       //footer
    res.write(footer);
    
    res.end();
               
 };

//cars pages
for(let i=0; i<carsJson.cars.length; i++){ 
        if(req.url===`/${i}`){ 
            model = carsJson.cars[i].model;
            photo = carsJson.cars[i].photo;
            price = carsJson.cars[i].price;
            description = carsJson.cars[i].description;
            
                           
            res.writeHead(200,{"Content-Type":"text/html"}); 
            res.write(headerAndStyle);

        //main  block (cars)
            res.write(`<div class="post-main">
				<h1><a href="#">`+ model + `</a> <span>` + price + `</span></h1>
				<div class="post">
					<img src="`+ photo + `" class="imgstyle" width="400px" alt="` + model + `" />
					<p>` + description + `</p>
                <p><a href="http://localhost:3000/">Main page</a></p>
                    </div>
                    </div>`);
  
       //footer
    res.write(footer);
    
    res.end();                                             
        }
            
    }

    //404 page
    if(req.url!=`/` || req.url!==`/${i}`){        
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("<h1>404 Error</h1>"); 
    }






})


const PORT = process.env.PORT || 3000;

server.listen(PORT,() => {
    console.log('listening')
})