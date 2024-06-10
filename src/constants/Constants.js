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
 
 rating: Math.floor(Math.random() * 5 + 1),       category: "Audio & Music Devices",
        brand: 'Apple',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 3,
        name: "Product 3",
        price: 7000,
        image: p3,
  
  rating: Math.floor(Math.random() * 5 + 1),      category: "Computing Devices",
        brand: 'HP',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 4,
        name: "Product 4",
        price: 14000,
        image: p4,
 
 rating: Math.floor(Math.random() * 5 + 1),       category: "Computing Devices",
        brand: 'Apple',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 5,
        name: "Product 5",
        price: 100000,
        image: p5,
 
 rating: Math.floor(Math.random() * 5 + 1),       category: "Computing Devices",
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
        image: p7,

rating: Math.floor(Math.random() * 5 + 1),        category: "Computing Devices",
        brand: 'Lenovo',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 8,
        name: "Product 8",
        price: 30000,
        image: p8,
  
  rating: Math.floor(Math.random() * 5 + 1),      category: "Computing Devices",
        brand: 'LG',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 9,
        name: "Product 9",
        price: 39000,
        image: p9,
  
  rating: Math.floor(Math.random() * 5 + 1),      category: "Audio & Music Devices",
        brand: 'LG',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    },
    {
        id: 10,
        name: "Product 10",
        price: 90000,
        image: p10,
 
 rating: Math.floor(Math.random() * 5 + 1),       category: "Audio & Music Devices",
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
  
  rating: Math.floor(Math.random() * 5 + 1),      category: "Computing Devices",
        brand: 'HP',
        reviews: Math.floor(Math.random() * 1000 +100),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Neque gravida in fermentum et sollicitudin. Nibh ipsum consequat nisl vel. Est sit amet facilisis magna etiam tempor orci. At consectetur lorem donec massa sapien faucibus et molestie ac. Consequat id porta nibh venenatis cras. Orci a scelerisque purus semper eget duis at. Neque sodales ut etiam sit. Diam sollicitudin tempor id eu nisl nunc mi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
    }
]


export { products }