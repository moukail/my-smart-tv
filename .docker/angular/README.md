### Create Angular app
````
echo | ng new --create-application=true --routing=true --style=scss --defaults --skip-git=true --skip-tests --interactive=false angular-mytv
````

### Configuring application environments
```
ng generate environments
```

### Add material design
```
echo | ng add --defaults=true @angular/material
```

### Add NGRX
```
echo | ng add --defaults=true @ngrx/data
echo | ng add --defaults=true @ngrx/store
```