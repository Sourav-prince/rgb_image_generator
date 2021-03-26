### rgb generator with react & canvas
generates 256x128 image on canvas with all compressed rgb combinations
demo https://rgb-generator.herokuapp.com/ 
## installation
Follow these steps
```
git clone https://github.com/Sourav-prince/rgb_image_generator.git
cd rgb_image_generator
npm install
npm start
```
## tests
Follow these steps
```
npm run test
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## implementation
- this works good for particular resolutions like 256x128
- getting the correct color depth bit of image
- divide the display are to possible chunks with equal spaced repeatation
- finding out correct offset to cover all rgb values
- check to cover the resolution length & unique values
- reference [https://codegolf.stackexchange.com/questions/22144/images-with-all-colors](https://codegolf.stackexchange.com/questions/22144/images-with-all-colors)
