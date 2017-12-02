call ./buildWebsite
call git add dist
call git commit -m "Generated page update"
call git subtree push --prefix dist origin master
