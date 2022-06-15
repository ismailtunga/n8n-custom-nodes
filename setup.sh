if test -z $(command -v n8n-node-dev); then
    echo "n8n-node-dev not found. installing..."
    if test -z $(command -v node); then
        echo "node not installed. exiting..."
        exit -1
    else
        npm i -g n8n-node-dev
    fi
fi

path=$(pwd)
mkdir ~/.n8n/custom/
custom_path=~/.n8n/custom/
cp package.json $custom_path
cd $custom_path && npm i
cd $path

for i in $(ls -d */); do 
    cd $i 
    echo $(pwd)
    
    if test -f package.json ; then
        echo "install package.json ..."
        npm i
    fi

    if test -f copy.txt ; then
        echo "copying files and folders..."
        for file in $(cat copy.txt); do
            cp -R $file ~/.n8n/custom/
        done
    fi

    echo "build..."
    n8n-node-dev build 
    cd ..; 
done
