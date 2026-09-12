import Card from './components/card'


const App = () => {

const jobs = [
  {
    brandlogo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/250px-Microsoft_icon.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/3840px-Spotify_App_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    company: "Spotify",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$42/hour",
    location: "Remote, India"
  },
  {
    brandlogo: "https://miro.medium.com/1*-_Oy1F9RhlYwtRGSyNEj9w.png",
    company: "Airbnb",
    datePosted: "10 days ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://s3-figma-hubfile-images-production-cdn-cgi.figma.com/cdn-cgi/image/format=auto,quality=85/hub/file/carousel/img/b8d00b2e389e3a38f115ea00f7dc3dff3ef4f337/dbc32aa496f21ffa8508a4f6432d1e6c6f76e3b1",
    company: "Figma",
    datePosted: "4 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Pune, India"
  },
  {
    brandlogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/3840px-Notion-logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    company: "Notion",
    datePosted: "6 days ago",
    post: "Content Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Remote, India"
  },
  {
    brandlogo: "https://www.designyourway.net/blog/wp-content/uploads/2024/12/Stripe-logo-featured.jpg",
    company: "Stripe",
    datePosted: "8 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://images.seeklogo.com/logo-png/27/2/shopify-logo-png_seeklogo-273895.png",
    company: "Shopify",
    datePosted: "3 weeks ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://1000logos.net/wp-content/uploads/2016/10/Adobe-Logo-1993.jpg",
    company: "Adobe",
    datePosted: "10 weeks ago",
    post: "Visual Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Noida, India"
  }
];

console.log(jobs);


  return (
    <div className='parent'>

      {jobs.map(function(elem,idx){

        return <div key={idx}>
            <Card key={elem.company} company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandlogo={elem.brandlogo} />
        </div>
      })}


    </div>
  )
}

export default App
