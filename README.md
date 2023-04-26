# Typescript Express setup Tutorial

  1. Membuat folder dengan command “mkdir namaProject”
  2. Kemudian masuk ke folder tersebut dengan command “cd namaProject”
  3. Menginstall package typescript dan ts-node sebagai devDependencies. Command `npm install  ts-node typescript -D`
  4. Menginstall package express, Type definition for express, serta Type definition for node. Command `npm i  express @types/express @types/node`
  5. Jika sudah selesai install, maka pada file package.json ada bagian yang akan terlihat seperti ini
  
  
  ```typescript
 "devDependencies": {
    "ts-node": "^10.9.1",
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

  8. Buatlah server dengan Express dengan membuat file index.ts, dengan kode berikut sebagai contoh 

```typescript
import express, { Express, Request, Response } from "express";
import { store } from "./models/user.model";

const app: Express = express();
app.use(express.json());

const PORT: number = 3000;

app.listen(PORT, (): void => {
  console.log(`Service running at PORT: ${PORT}`);
});

```

9. Periksa apakah server Express sudah berfungsi dengan command `ts-node src\index.ts`. Jika sudah tidak ada error, maka terminal akan menampilkan 
``` Service running at PORT: 3000 ```
 
