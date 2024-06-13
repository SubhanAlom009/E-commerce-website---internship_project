import p1 from '../assets/products/p1.jpg'
import p2 from '../assets/products/p2.jpg'
import p3 from '../assets/products/p3.jpg'
import p4 from '../assets/products/p4.jpg'
import p5 from '../assets/products/p5.jpg'
import p6 from '../assets/products/p6.jpg'
import p7 from '../assets/products/p7.jpg'
import p8 from '../assets/products/p8.avif'
import p9 from '../assets/products/p9.avif'
import p10 from '../assets/products/p10.jpg'
import p11 from '../assets/products/p11.jpg'
import p12 from '../assets/products/p12.jpg'

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


export const aboutUs = {
    about:"Welcome to TechTrove, your go-to destination for all things tech-related! At TechTrove, we are passionate about technology and its transformative power to shape the future. Our platform is dedicated to providing you with the latest news, insights, reviews, and resources to help you navigate the dynamic world of technology.",

    mission:"At TechTrove, our mission is simple: to empower individuals and businesses with the knowledge and tools they need to thrive in the digital age. We believe that technology has the potential to drive innovation, solve complex problems, and improve lives. Through our platform, we strive to democratize access to information and foster a community of tech enthusiasts, learners, and professionals.",

    team: "Our team consists of passionate individuals with diverse backgrounds and expertise in various areas of technology, including software development, data science, cybersecurity, digital marketing, and more. Together, we are dedicated to curating valuable content, facilitating meaningful discussions, and providing valuable insights to our audience.",

    contact: "We'd love to hear from you! Whether you have feedback, suggestions, or inquiries, feel free to reach out to us at contact@techtrove.com. Join us on our journey to explore the ever-evolving world of technology and discover new possibilities together!"
};


const products = [
    {
        id: 1,
        name: "Product 1",
        price: 5000,
        image: p1,
        rating: Math.floor(Math.random() * 5 + 1),
        category: "Computing Devices",
        brand: 'Samsung',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 2,
        name: "Product 2",
        price: 10000,
        image: p2,
        rating: Math.floor(Math.random() * 5 + 1),       
        category: "Audio & Music Devices",
        brand: 'Apple',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 3,
        name: "Product 3",
        price: 7000,
        image: p3,
        rating: Math.floor(Math.random() * 5 + 1),      
        category: "Computing Devices",
        brand: 'HP',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 4,
        name: "Product 4",
        price: 14000,
        image: p4,
        rating: Math.floor(Math.random() * 5 + 1),       
        category: "Computing Devices",
        brand: 'Apple',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 5,
        name: "Product 5",
        price: 100000,
        image: p5,
        rating: Math.floor(Math.random() * 5 + 1),       
        category: "Computing Devices",
        brand: 'Apple',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 6,
        name: "Product 6",
        price: 6000,
        image: p6,
        rating: Math.floor(Math.random() * 5 + 1),
        category: "Mobile Devices",
        brand: 'Samsung',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 7,
        name: "Product 7",
        price: 37000,
        image: p7,      rating: Math.floor(Math.random() * 5 + 1),        
        category: "Computing Devices",
        brand: 'Lenovo',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 8,
        name: "Product 8",
        price: 30000,
        image: p8,
        rating: Math.floor(Math.random() * 5 + 1),      
        category: "Computing Devices",
        brand: 'LG',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 9,
        name: "Product 9",
        price: 39000,
        image: p9,
        rating: Math.floor(Math.random() * 5 + 1),      
        category: "Audio & Music Devices",
        brand: 'LG',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 10,
        name: "Product 10",
        price: 90000,
        image: p10,
        rating: Math.floor(Math.random() * 5 + 1),       
        category: "Audio & Music Devices",
        brand: 'Apple',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 11,
        name: "Product 11",
        price: 11000,
        image: p11,
        rating: Math.floor(Math.random() * 5 + 1),
        category: "Audio & Music Devices",
        brand: 'Samsung',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 12,
        name: "Product 12",
        price: 80000,
        image: p12,
        rating: Math.floor(Math.random() * 5 + 1),      
        category: "Computing Devices",
        brand: 'HP',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    }
]

export const testimonials = [
    {
      user: "John Doe",
      company: "Stellar Solutions",
      image: user1,
      text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    },
    {
      user: "Jane Smith",
      company: "Blue Horizon Technologies",
      image: user2,
      text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    },
    {
      user: "David Johnson",
      company: "Quantum Innovations",
      image: user3,
      text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    },
    {
      user: "Ronee Brown",
      company: "Fusion Dynamics",
      image: user4,
      text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    },
    {
      user: "Michael Wilson",
      company: "Visionary Creations",
      image: user5,
      text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    },
    {
      user: "Emily Davis",
      company: "Synergy Systems",
      image: user6,
      text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    },
  ];

export { products }