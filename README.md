# Typescript Express setup Tutorial

  1. Membuat folder dengan command “mkdir namaProject”
  2. Kemudian masuk ke folder tersebut dengan command “cd namaProject”
  3. Menginstall package typescript sebagai devDependencies. Command `npm install typescript -D`
  4. Menginstall package express, Type definition for express, serta Type definition for node. Command `npm i  express @types/express @types/node`
  5. Jika sudah selesai install, maka pada file package.json ada bagian yang akan terlihat seperti ini
  
  
  ```typescript
"devDependencies": {
 "typescript": "^5.0.4"
  },
  "dependencies": {
    "@types/express": "^4.17.17",
    "@types/node": "^18.15.11",
    "express": "^4.18.2"
    }
```

  6. Generate file tsconfig.json dengan tsc command: `npx tsc --init`. Lalu buatlah folder baru dengan nama dist
  7. pada file tsconfig.json, uncomment option yang bernama outDir, lalu ubah valuenya dengan dist. Sesudah itu berhasil, maka akan terlihat seperti ini
    

 ```typescript
{
"compilerOptions": {
...
"outDir" : "./dist"
...
}
}
```

 
