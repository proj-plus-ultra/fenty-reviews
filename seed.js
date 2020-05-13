const faker = require('./faker.js');
const db = require('./db/index.js');

const skinTypes = ['Dry', 'Normal', 'Combo', 'Oily', 'Sensitive'];
const skinTones = ['Light', 'Deep', 'Tan', 'Medium'];
const ageRange = ['18 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64'];

const fakeReviews = [
    'I was really excited to try this especially since it promises not to smudge. It does Make my lashes (natural) look GREAT!! It wears well for a few hours, but then starts to smudge and leave dark circles. I am now looking for a good lash primer.',
    'This product really is worth the hype. The more you apply the better you look. Will definitely buy again',
    "I recently ordered some products from FB and was gifted a complimentary sample of this mascara and OMG! I literally look like I'm wearing extensions! I have never had a mascara do this to my lashes. The Full Frontal mascara is the only mascara I'm using for now on. I am making it a number one priority to go to my local Sephora and buy a full size. THANK YOU RIH!",
    'I tried several other brands before Fenty released this. Fenty beat them hands down.',
    'Just got this and couldn’t wait to try it. It’s awesome. I also use her lipsticks. They last all day! Great products',
    'Rihanna did it again',
    "Bought today and I'm hooked! Volume, length, strong pigment, hands down an amazing product.",
    'I’ve been waiting for this to drop because this was the only thing I was missing! Perfect add to the collection and went out to get it today! Miss Fenty you did it again!!',
    'Im super dissapointed about this because I love Fenty and I love the Moroccan Spice palette, that is full of beautiful colors and it applies beautifuly, I found this colors very poor and so hard to use, besides that, 2 out of 6 shadows fell out.',
    'Bought all 8 of the pallets as they are all the colours you would need! They have such great pigment that only a little goes a long way. Only downside is the pallet size itself is way smaller than pictured. Two fit easily in the palm of my hand, whereas advertising suggested one was large enough to be the size of you whole hand (I could be mistaken by camera angles though...)',
    "I love these, they stay on ALL FREAKING DAY long! I'll be for sure buying all the sets soon!!!",
    'My sister loved this! She says it’s perfect for travel and a great staple in her collection. Thanks RiRi!',
    'Just luv Fenty, period, the colors blends amazingly',
    'Love the shadows so intense and very long wearing stays in all day !!!!!',
    'I love the colors on both pallets they go great with my skin tone',
    'I bought three of them and now added couple more. They are one of the best eyeshadows in my collection.',
    'I bought the 1 & 3 pallet which look really nice on my brown skin tone. Shadows are pigmented and so versatile!',
    'Beautiful pigmented colors with 0 fallouts!! Totally WORTH IT !!!',
    'I bought Snap Shadows 1 through 6 the same day they launched at Sephora. I must say I am so pleased with them. The colors are so pigmented and they blend so well. I was looking so snatched and fly. My favorite palette is definitely 3 the deep neutrals, FYI I will never use anything but Fenty products. Thanks so much RiRi',
    'I have not used this yet, but I am obsessed with the idea of buying what I want in a quality portable case. No more cardboard boxes or ginormous palettes that I use 1/4 or less of the shades. Thank you! I am positive the quality of the shadows will be the bomb coming from Fenty!',
    'I purchased 4 and 8 so far. Love the pastels! Def want to grab them all!',
    "I've been wanting the lava since it debuted and it was always sold out. I'm so glad it was ready for Christmas. Worth the wait.",
    'smooth, sparkly, and smells amazing! I love this stuff!'
];

const fakeTitles = [
    'OBSESSED',
    'SWATCHED AT SEPHORA - IN LOVE',
    'BLENDS LIKE A DREAM!',
    'ITS SMOKIEE',
    'GORGEOUS COLORS',
    'LOVE!!',
    'SUPER CUTE!',
    'WOW',
    'SMALL BUT AWESOME',
    'PERFECT!',
    'HIGHLY RECCOMEND',
    'MEH',
    "I'LL BE BUYING ALL OF THE SETS!",
    'LISTEN SIS...',
    'LOVE! LOVE! LOVE!',
    "DIDN'T WORK FOR ME",
    'BEAUTIFUL SHIMMER',
    'MAKES ME GLOW',
    'TROPHY WIFE',
    'PERFECT',
    'SHINE BRIGHT',
    'SMELL AWESOME',
    'GREAT'
];

var createEntry = (i) => {
    var userQuery = `INSERT INTO user_info(username, location, reviews, votes, skin_type, skin_tone, age) VALUES ('${faker.internet.userName()}', "${faker.address.city()}", ${Math.floor((Math.random() * 10) + 1)}, ${Math.floor((Math.random() * 10) + 1)}, '${skinTypes[Math.floor(Math.random() * skinTypes.length)]}', '${skinTones[Math.floor(Math.random() * skinTones.length)]}', '${ageRange[Math.floor(Math.random() * ageRange.length)]}')`;
    var reviewQuery = `INSERT INTO review(rating, date, title, body, reccomend, helpful_yes, helpful_no, quality, value, id) VALUES (${Math.floor((Math.random() * 5) + 1)}, ${Math.floor((Math.random() * 5) + 1)}, "${fakeTitles[Math.floor(Math.random() * fakeTitles.length)]}", "${fakeReviews[Math.floor(Math.random() * fakeReviews.length)]}", 1, ${Math.floor((Math.random() * 10) + 1)}, ${Math.floor((Math.random() * 5) + 1)}, ${Math.floor((Math.random() * 5) + 1)}, ${Math.floor((Math.random() * 5) + 1)}, ${i + 1})`;
    db.query(userQuery);
    db.query(reviewQuery);
}
var seed = (cb) => {
    for(var i  = 0; i < 100; i++) {
        cb(i)
    }
    console.log('done')
};

seed(createEntry);

console.log(faker.name.findName());