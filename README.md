mkdir ./README.md
echo "test" >> ./README.md                              #create a file
git init                                                #init dir
git add README.md                                       #add file to cache
git commit -m "first commit"                            #add commit
git bracnch -M master                                   #create a bracnch
git remote add origin git@github.com:smollbird/test.git #add ssh
git push -u origin master                               #push into this github
