#!/bin/sh

images_base="./images"

convert ${images_base}/logo-only.svg -scale 48x48 ${images_base}/manifest/icon-48x48.png 
convert ${images_base}/logo-only.svg -scale 72x72 ${images_base}/manifest/icon-72x72.png 
convert ${images_base}/logo-only.svg -scale 96x96 ${images_base}/manifest/icon-96x96.png 
convert ${images_base}/logo-only.svg -scale 144x144 ${images_base}/manifest/icon-144x144.png 
convert ${images_base}/logo-only.svg -scale 192x192 ${images_base}/manifest/icon-192x192.png 
convert ${images_base}/logo-only.svg -alpha activate -scale 512x512 ${images_base}/manifest/icon-512x512.png 

