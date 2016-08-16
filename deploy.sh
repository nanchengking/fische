#!/usr/bin/env bash
cd ..
pwd
#压缩
project=fische
echo '删除原有压缩包……'
rm ./${project}.tar.gz

echo '开始压缩新包'

tar zcvf ${project}.tar.gz ./${project}

echo '压缩结束,开始上传新压缩包'

ali_scp push ${project}.tar.gz

#解压：tar zxvf pageCenter.tar.gz
echo '上传成功'
