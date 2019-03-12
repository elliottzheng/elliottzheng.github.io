cd `dirname $0`
git remote add gitee https://gitee.com/ylzheng/ylzheng.git
cp -r ./dist/* ./release
git add *
git commit -m $1
git push origin master -f 
git push gitee master -f