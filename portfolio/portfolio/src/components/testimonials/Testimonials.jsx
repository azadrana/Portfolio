import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Mohd Mohseen",
      title: "Web developer",
      img:
        "images/mohseen.jpg",
      icon: "assets/twitter.png",
      desc:
        " Hii I am full stack web developer having Three years of experience in different domain of web development.",
    },
    {
      id: 2,
      name: "Saddu",
      title: "Senior Web developer",
      img:
        "images/Saddam.jpg",
      icon: "assets/youtube.png",
      desc:
        "Hii I am  Senior full stack web developer having Three years of experience in different domain of web development",
      featured: true,
    },
    {
      id: 3,
      name: "Mohd Adnan",
      title: "Web developer",
      img:
        "images/adnan.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Hii I am  Senior full stack Java developer having Ten years of experience in different domain of Java Application.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
