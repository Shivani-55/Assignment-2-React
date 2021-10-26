//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="nav">
              <ul>
                <li id="logo">EDYODA</li>
                <li id="logo-text">Stories</li>
              </ul>
            <div id="dropdown">
              <span id="dropdown-text">Explore Categories<i className="fas fa-chevron-circle-down dropdown-icon"></i></span>
            </div>
          </div>
          <div className="nav">
            <ul id="text"><li>EdYoda is free learning and knowledge</li>
            <li> sharing platform for techies</li>
              </ul>
            
          </div>
          <button>Go To Main Website</button>
        </nav>
      </header>
  

      <main>
        <div>
          <div id="categories-container">
            <h3 id="heading">Latest Posts</h3>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=" width="20px"/>
            <p className="filter_text"> Filter by Category</p>
          </div>
          <div id="filter-options">  
            <p className="categories"> All </p>
            <p className="categories"> Artificial Intelligence </p>
            <p className="categories"> Cloud Computing </p>
            <p className="categories"> DevOps </p>
            <p className="categories"> Programmimg Languages </p>
            <p className="categories"> Mobile Application Development </p>
            <p className="categories"> Technology and Tools </p>
            <p className="categories"> Get a Job in a Tech Company </p>
            <p className="categories"> Others </p>     
          </div>
         

    
        
       <section id="items">
        
        <article className="grid">
          <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png"/> 
          <div className="text">
            <div className="card-title"><b> Introduction To A Machine Learning Online Course</b> </div>
          <div className="name"> EdYoda 
          <span className="date"> | 23 Aug 2019 </span> </div>
          <p className="description">We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what is...</p> </div>
        </article>
        
        
        <article className="grid">
          <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png"/>
          <div className="text">
          <div className="card-title"><b> LAMP Stack Vs MEAN stack: Choosing the right platform for your web application development </b></div>
          <div className="name"> EdYoda 
          <span className="date"> | 24 Aug 2019 </span> </div>
          <p className="description">In today’s dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement.</p> </div>
        </article>
             
        <article className="grid">
          <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png"/>
          <div className="text">
          <div className="card-title"><b> Impact of Cloud Computing in various industries </b></div>
          <div className="name"> EdYoda 
          <span className="date"> | 24 Aug 2019 </span> </div>
          <p className="description">Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud technology</p> </div>
        </article>
         
        <article className="grid">
          <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png"/> 
          <div className="text">
          <div className="card-title"> <b>Challenges of Machine Learning in Big Data Analytics </b></div>
          <div className="name"> EdYoda 
          <span className="date"> | 24 Aug 2019 </span> </div>
          <p className="description">Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work</p> </div>
        </article>
        
        <article className="grid">
          <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png"/>
          <div className="text">
          <div className="card-title"><b> Breaking the Myths around Cybersecurity </b></div>
          <div className="name"> EdYoda 
          <span className="date"> | 26 Aug 2019 </span> </div>
          <p className="description">As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The number of cyberattacks is ever-rising</p> </div>
        </article>
        
        <article className="grid">
          <img className="image" src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png"/>
          <div className="text">
          <div className="card-title"><b> Importance of Data Backup and Recovery in the IT industry </b></div>
          <div className="name"> EdYoda 
          <span className="date"> | 26 Aug 2019 </span> </div>
          <p className="description">A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contingency plan</p> </div>
        </article>
        
          
      </section>
      </div>
      </main> 

      <footer>
          <div className="footer-section">
            <h3>EDYODA</h3>
            <a href="/">About Us</a>
            <a href="/">Contact Us</a>
            <a href="/">Terms of Use</a>
            <a href="/">Privacy Policy</a>
          </div>
          <div className="footer-section">
            <h3>RESOURCES</h3>
            <a href="/">Courses</a>
            <a href="/">Learning Videos</a>
            <a href="/">Educators</a>
            <a href="/">Edyoda Stories</a>
            <a href="/">University</a>
          </div>
          <div className="footer-section">
            <h3>FOR ENTERPRISES</h3>
            <a href="/">Train Your Employees</a>
          <div className = "footer-section">
            <h3>QUICK LINKS</h3>
            <a href="/">Learn and Earn</a>
            <a href="/">Become a Learning-Enabler</a>
            <a href="/">Tips for Learning-Enabler</a>
            <a href="/">Request New Topic</a>
          </div>
          </div>
          <div className="footer-section">
            <h3>CONNECT</h3>
            <a href="/">2nd Floor #188, Survey No. - 123/1,<br/>Incubes Building Next to McDonalds,<br/>ITPL Main Rd, Brookefield,<br/>Bengaluru, Karnataka-560037,<br/>India</a><br/>
            <div id="email">
            <img src="https://www.edyoda.com/static/media/email-white.e7d51381.svg" width="30px" height="16px"/>
            <a href="/"> hello@edyoda.com</a>
            </div>
            <a href="/">
              <img className="social-icon" src="https://www.edyoda.com/static/media/location-pin.de95721a.svg" width="20px"/>
              <img className="social-icon" src="https://www.edyoda.com/static/media/twitter-white-icon.ea27ab22.svg" width="20px"/>
              <img className="social-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAqCAYAAAC+5wuXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMlJREFUeNpi/P//PwMewAzEPkDsBcRWQKwIxNxYVYIMwoG1gPjCfyIBCw6XqAPxQSAWYSASMGERYwTiBaQYgssgWyC2YCARYDMolIEMgM0gc3IMwhbYSgT0XATiTiB+AsTf4AGLJR39AmJWPAZpAvENjBjCYtB/Ai4CJdJ/xIQRIfCP2MBmoFas4QPf8MWaCwkG/celHhTY/6ngs/fUCqMX1DLoGbUMej6MvcYCLRGJzWsfgVhgUGWRUYNGDRo1aNSgUYNIBgABBgDTamTg3XAChAAAAABJRU5ErkJggg==" width="8px" height="20px"/>
              <img className="social-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACE1BMVEUAAAD//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f0AAACS7nrlAAAAr3RSTlMAARIiEydtsub757RvKUO+wEIauRXp4zb68i0q7+AWAs+oX/4z4bM3+Q2FVb+R2LDxzvXV3b3EpJJxRyMH8NN7VgrJTP3zd4JaTtoUifTiamucBiU7UVsyGwwdL0BKIQtUjsj435dQJGAOaXkxEJ2D97w8sURn/GK7gZumBLp6Qbjlt262tQPGOJ6KhqDRD+oZra+WkK6HzKwomaua9o2qgJ+pOcPkp9KlfaNwoqER3P6g3gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCwQRLRRI/vG6AAADvElEQVR42u3a+TsUYQAH8HfLteQuqWRJISo3hRK2U22HDhRJCB1CETolXZJSoUv3Xe+/WPJsz66d9zvzjnnfeR6735/fd76fPWfmnZcQX1xjWbDQz2JWuX9AYJCVUmoNDlkUKr8+LJy6JiJSbn2Ue/10ohfLfPlLqGdilkrrj4ylSlm2XFL/ijiqnJXxUvptCZSVRCmAVcx+mrRaQr9lDRtAkyUAUkA/TV0rHpCGADRdPGAdBKwXD9gAARniAZkQkCUekA0BOeIBuRCQJx6QDwEF4gEbIWCTeEAhBBSJBxRvBv1bxPcTUgIAW2UASoOY/WVyrpDL7Yz+bbIuibYr99vLJfUTsiNJoT97p7R+QnZ5/hR2y3r/Z1KxZ69bvWNfsdT+v4nfn+w8LzkOpB+UXf8vxZWHDh8pPFplSrkvvvjii5BU1xw7XptSd8KM7qj6kw2n/p9YG8uampn3uadb2Jl1Sihkj3RbVWtty/I8vcdGnDmrCGgB14Tn3IeCG1mXm8i688y7rYbIuQHCNQBK2y+AA9KOlLkA8tQBnQ6qki5/kYBm+PJnknlRN6BDDXCpW72fUmuPXsBlFUCvlvrppFlEAGx9Wvsp7b+iC3AVAq5p76e0XRcgGgE6NX3+ztiv6wHcAAC/GJ5+Sm9WGAvoCuHrpzRQB2CAPTKOcucWP2CQvwUks5UbcNtQgHMByjxA4xAvgPuLppJ6XkCywYA7ZgPoXU5AoNGAe5yALm2HdQze7wl4MPxQfWQuJyBDQ3tC7YhzeGjvI7XRo0YDgntsrhPiH6uMr+cDPFHrH6smsxKAJzzlAzxT6e8jnnkOZ4zzAVTe0IkhBYAFfnO7qw0ERCiv7FVa0aQwLsAEfDGTRDkv0Kw2LsBLdKhXjH5ShGaVGAZ4HcUCEPSP9IYLMAWGjjH7yVsw7R0X4D0YCp4yfwDTurgAiWDoKBtQBaZ9NArwid1PhuzseTlcgM/skV8AgLCfStFgLkA/e2Q+Aoyz56UaBRhAAPRvzAX4yh4JNxo0GQUo0An4ZhTgu07Aj3kD+Gk24JfZgGEfwGyA6d8B038Fpv8PmA7Qey4wDKD3bGgYAFwPyAGASzI5AHBR6iUAcGMiBzBlNgDcnMoBgPUBOQCwQuIlALBKJgcA1gnlADLMBoCbTDkAsFzvJQDwxEQOADy0kgMAj+3kAMCTUzkA8OzYSwBo/4AUANxBIQOA95BIAKht4xEOUN3INO8BGjaziQWEmw3QtqGRFzAyyY7N/UA17JFwS/5vUEG8Pn8AAeaBBm01AhgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTEtMDRUMTc6NDU6MjArMDE6MDDpm7GmAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTExLTA0VDE3OjQ1OjIwKzAxOjAwmMYJGgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" width="20px"/>
            </a>
            <a href="/">© 2021<br/>zekeLabs Technologies Private Limited</a>
          </div>
      </footer>
      
    </div>
  );
}

export default App;
