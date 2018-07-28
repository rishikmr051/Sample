 git rm --cached FileToDiscard.tst
 git cherry-pick <commit id>
 ls -al
 // to unstage last commit
 git reset --soft HEAD^ 

 // to delete last committed files
  git reset --hard HEAD^ 
