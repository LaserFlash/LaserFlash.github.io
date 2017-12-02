call ./buildWebsite
call git reset
call git add dist -f
call git commit -m "Generated page update"
call git subtree push --prefix dist origin master
