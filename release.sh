project=fische
echo '开始解压文件'$project
rm -rf $project
tar zxvf ${project}.tar.gz
chown -R node ${project}
rm -rf ${project}/node_modules
cp -R ./node_modules ./${project}/
