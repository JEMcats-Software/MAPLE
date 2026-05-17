# Making your own words list
If for some reason you want to create inconsistency by having your own custom words list, I have left the instructions in this file even though I urge you to not create your own words list because confusion may occur.

## Download original words
Download this file as ```20k.txt``` and put it in the assets folder:

(https://gist.github.com/eyturner/3d56f6a194f411af9f29df4c9d4a4e6e)[https://gist.github.com/eyturner/3d56f6a194f411af9f29df4c9d4a4e6e]

## JSONify the words
Use ```txttojson.py``` to convert the words list into a json array.

## Clean words
Open ```clean.py``` and fill the ```swear_words``` array with words you would like to filter out (I have left a link to the list I used in that file).

Run ```clean.py```.

## Split words
Use ```split.py``` to split ```rawwords.json``` into the four words lists that are needed to make MAPLE work.

## Host words
Host the words files in the same directory on a static file hosting service and use that url in the MAPLE runtime files.

## Conclusion
I hope you enjoy your new word lists but please don't use them anywhere because chances are you made a version with swear words or something and it is now incompatible with every other instance of MAPLE anywhere defeating the purpose of MAPLE, easily sharing locations that have no addresses.