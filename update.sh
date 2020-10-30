# sudo git pull
# git config --global user.name 'your user name'
# git config --global user.password 'your password'
docker build -t goldenstarc/payanak:2.0 .
# docker stop payanak_2.0
# docker rm payanak_2.0
# docker run \
#     --name payanak_2.0 \
#     -p 5001:80 \
#     --restart=always \
#     -d goldenstarc/payanak:2.0
# docker login
docker push goldenstarc/payanak:2.0