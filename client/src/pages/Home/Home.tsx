
import "./Home.css"
import { Link } from 'react-router'



const Home = () => {
    const CardsData = [
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOhEgnVviOYA4Y1r0OlzEEgj3_IGZ9Y89WQ&s",
            path: "#",
            title: "Merge PDF",
            description: "Combine PDFs in the order you want with the easiest PDF merger available."
        },
  
    ]
    return (
        <section>
            <div className='Home_Container'>
                <div className='Home_title'>
                    <h1 className='Home_Head'>Every tool you need to work with PDFs in one place   </h1>
                    <p className='Home_SubHead'>
                        Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge,  <br /> split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.

                    </p>
                </div>

                {/* Wrap of Card */}
            


                    <div className='Home_Wrap'>

                        {CardsData.map((card, index) => (
                            <Link to={card.path}>

                                <div className='Home_Card' key={index}>
                                    <img className='Card_img' src={card.icon} alt={card.title} />
                                    <h2 className='Card_head'>{card.title}</h2>
                                    <p>{card.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                {/* Wrap Ends */}
            </div>
        </section>
    )
}

export default Home