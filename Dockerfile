# https://hub.docker.com/_/microsoft-dotnet-core
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /source

# copy csproj and restore as distinct layers
# COPY SMSPanel/*.csproj ./aspnetapp/
# RUN dotnet restore

RUN a \
    && apt install curl gnupg libgdiplus libc6-dev -yq \
    && curl -sL https://deb.nodesource.com/setup_12.x | bash \
    && apt install nodejs -yq

curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# copy everything else and build app
COPY Backend/. ./aspnetapp/
WORKDIR /source/aspnetapp
RUN dotnet publish -c release -o /app  -r linux-x64  --self-contained false
# RUN ls
# --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["./Backend"]
# ENTRYPOINT ["tail", "-f", "/dev/null"]


# FROM gcr.io/google-appengine/aspnetcore:2.0
# ADD ./bin/Release/netcoreapp2.0/publish/ /app
# ENV ASPNETCORE_URLS=http://*:${PORT}
# WORKDIR /app
# ENTRYPOINT [ "dotnet", "HelloWorldAspNetCore.dll"]