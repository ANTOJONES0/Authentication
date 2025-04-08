import { createSlice } from "@reduxjs/toolkit";
import wed from '../assets/images/60th wedding.jpeg'
import birth from '../assets/images/birthday.webp'
import seeman from '../assets/images/seemanham.jpg'
import marr from '../assets/images/marriage.jpg'
import anna from '../assets/images/annaprasana.jpg'
import engage from '../assets/images/engagement.jpg'
import retire from '../assets/images/retirement.jpeg'
import mehan from '../assets/images/mehandi.jpg'
import house from '../assets/images/housewarming.jpg'
import copor from '../assets/images/coroporate.jpg'
import reuni from '../assets/images/reunion.jpeg'
import farewell from '../assets/images/farewell.jpg'

const serviceSlice =  createSlice({
    name: 'service',
    initialState: [
        {images: {marr},heading : 'Wedding Event',paragraph: 'Wedding. Why we have the concept of inviting all our relatives, friends and known ones? Its because, when a family celebrates an event means, its an occasion, when lot of people celebrates an event means, it turns as a feast. If there any feast occurs without food?? We are here to make a memorable experience for your guests by pampering their taste buds.'},
        {images: {wed},heading: '60th Wedding Event', paragraph: 'What more happiness we can get more than getting blessings from a couple who are stepping into their 60th year of the wedding life. In our nuclear family system, seeing our elders and spending time with them became rarity. We at Venus Catering Service, want to provide a sumptuous food for all your guests who are attending for your family 60th wedding anniversary.'},
        {images: {seeman},heading:'Seemantham',paragraph:'What can be more special than a woman giving life to another soul in this world? It’s an amazing experience to witness a woman getting transformed into motherhood. All the friends, relatives and people on our locality will be coming to greet and bless the to be mother and the baby to arrive safely. We make sure that the food taste gives you extra happiness and smile.'},
        {images: {farewell},heading:'Farewell Party',paragraph:'In the current modern world, we all runs a race in terms of education, job, business, wealth creation and lot more, amidst of all these materialistic things, we mostly forgot the basics of life such as family, relatives, friends and neighbors. It is such a pleasure to witness the couple who are together in their 70th married life and we venus take care of the good food.'},
        {images: {reuni},heading:'Reunion Party',paragraph:'80th Wedding in Tamil is called as “Sathabishegam”. Its so special to witness such a ceremony and get blessings from the couple who got married for 8 long decades. They are equal to God and this ceremony is celebrated very grand in most of the places of Tamil Nadu. We at Venus Catering Service ensures that all your guests will enjoy the delicious food.'},
        {images: {engage},heading:'Engagement',paragraph:'Wedding is a special bond which makes the life of any person as a beautiful one. Engagement is the first step of the wedding process and it assures the bond and relationship between two individuals. Engagements are celebrated in very grand manner. According to us, we give more importance to the satisfaction of the guests in terms of food.'},
        {images: {anna},heading:'Annaprasana',paragraph:"A popular Hindu custom, Annaprasanna marks the beginning of solid food in your baby's life. Following this ritual, Parents will start feeding solid foods to baby on day-to-day basis. Many parents prefer to hire a banquet hall or community center for the function where they call all their dear ones to bless the baby. At Venus, we ensure everyone’s happiness by give them the yummy food."},
        {images: {birth},heading:'Birthday Party',paragraph:"Make every birthday a memorable one with our birthday photography. Whether it’s a child's first birthday or a milestone celebration, we capture the joy, excitement, and love of the day and preserve it forever. At Venus Catering Service, we take care of the happiness of your guests by offering them amazing food on behalf of you."},
        {images: {house},heading:'House Warming',paragraph:'Houses makes our life complete. Most of our life we are going to spend on the houses. So houses are always special. It carries out all the emotions of family and pass it to generations and on. In our society, building a house is considered as an achievement and it gives immense happiness and secured feel. We take of your guests and they will praise about your house and our food as well.'},
        {images: {mehan},heading:'Mehndi Function',paragraph:'The core significance of applying Mehndi is to utilize its natural medicinal herbal remedies, cooling the body and relieving the bride of any stress before her big day. Apart from the medicinal benefit, bride g looks beautiful with her mehndi filled hands. In modern day marriages, it’s a trend to have mehndi function exclusively and we obviously take care of food.'},
        {images: {copor},heading:'Corporate Events',paragraph:'From corporate events to business occasions or milestone celebrations, our event catering team captures the heart of their audiences on their special occasions. We focus on delivering the customized delicacies of different types. We make sure all the audience feel good about the food too and that make your event unique.'},
        {images: {retire},heading:'Retirement Function',paragraph:"A retirement party is definitely a time to get emotional and relish the moments of hard work and perseverance. We do this by organizing an event to present highlights of the retiree's personal life and work life. Both are important to display at this occasion. We call all our colleagues and near ones and its unfair to send them without good food."},
    ]
})

export default serviceSlice.reducer