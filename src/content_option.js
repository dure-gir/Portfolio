import myPic from '../src/assets/images/BGPic.jpg'

import ForumBanner from '../src/assets/images/ForumBanner.png'
import netBanner from '../src/assets/images/NetflixBanner.png'
import appleBanner from '../src/assets/images/AppleBanner.png'
import amaBanner from '../src/assets/images/AmazonBanner.png'

const logotext = "DURE";
const meta = {
	title: "Duresa Girma",
	
};

const introdata = {
	title: "I’m Duresa Girma",
	animated: {
		first: "I love coding",
		second: "I code cool websites",
		third: "I develop full-stack websites",
	},
	description:
		"I'm Duresa Girma, an enthusiastic full-stack web developer proficient in building interactive and responsive web applications. I specialize in React, MongoDB, MySQL, Express, Node.js,  JavaScript, CSS3, and HTML, transforming concepts into well-designed and powerful solutions. I excel in tackling challenging issues and am committed to constantly learning new technologies to remain at the forefront of the industry.",
	// your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
	your_img_url: [myPic]
};
// const myPic = [img4, img2, img3, img1, img5, img6];

const dataabout = {
	title: "A bit about myself",
	aboutme:
		"I am an innovative Full Stack Web Developer based in Addis Ababa, Ethiopia. I am passionate about my work and fully dedicated to it. Through diverse projects, I've developed the ability to create modern, high-quality websites that are visually appealing and aligned with the latest trends.\n\nWith a strong foundation in both front-end and back-end technologies, I specialize in building responsive and user-friendly web applications. I thrive on solving complex problems and continuously learning new skills to stay ahead in this ever-evolving field. My goal is to deliver exceptional digital experiences that drive success for businesses and satisfaction for users.",
};


const skills = [
	{
		name: "HTML, CSS  and JAVASCRIPT",
	},
	{
		name: "  REACT  BOOTSTRAP  JQUERY ",
	},
	{
		name: "NODE EXPRESS FIREBASE",
	},
	{
		name: "MySQL  and MongoDB",
	},
	{
		name: "RESTful API GIT and GITHUB",
	
	},
];

const services = [
	{
		title: "UI & UX Design",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
	},
	{
		title: "Mobile Apps",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
	},
	{
		title: "Wordpress Design",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
	},
];

const portdescription = {
	about : "Welcome to my portfolio! Here, I present a collection of projects that highlight my full-stack web development expertise. Whether it's recreating the websites of major companies like Apple, Netflix, and Amazon, or developing original projects like the Evangadi Forum, my work reflects strong skills in both front-end and back-end development. Take a look to see how I combine innovation, technical skill, and user-focused design to create effective and visually appealing web applications. Feel free to explore and connect if you’re interested in my work or collaboration opportunities!",
};

const dataportfolio = [
	{
		img: [amaBanner],
		description: "  Amazon e-commerce  Website",
		link: "https://ecommerce-clone-amazon.netlify.app/",
		onGit: "https://github.com/dure-gir/cloningAmazon",
	},

	{
		img: [ForumBanner],
		description:
			"Evangadi Forum",
		link: "https://evangadiforumm.netlify.app/",
		onGit: "https://github.com/dure-gir/Eva-Forum_Frontend",
	},
	{
		img: [netBanner],
		description:
			"Netflix Clone",
		link: "https://stale-whistle.surge.sh/",
		onGit: "https://github.com/dure-gir/Netflix-Clone-2024",
	},
	{
		img: [appleBanner],
		description:
			"Apple Frontend Clone",
		link: " https://dg-react-appl-clone.netlify.app/",
		onGit: "https://github.com/dure-gir/cloningAmazon",
	},
];

const contactConfig = {
	YOUR_EMAIL: "duragirma@gmail.com",
	YOUR_FONE: "+251914029868",
	
	// creat an emailjs.com account
	// check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
	YOUR_SERVICE_ID: "service_id",
	YOUR_TEMPLATE_ID: "template_id",
	YOUR_USER_ID: "user_id",
};

const socialprofils = {
	github: "https://github.com/dure-gir",
	// facebook: "https://facebook.com",
	linkedin: "https://www.linkedin.com/in/duresa-girma-9bba1a320/",

	// twitter: "https://twitter.com",
};
export {
	meta,
	dataabout,
	dataportfolio,
	portdescription,
	skills,
	services,
	introdata,
	contactConfig,
	socialprofils,
	logotext,
};
