# Basic Commands

## git init

Initializes a new git repo. Think like making normal folder to git folder to track changes.

```
git init
```

## git status

Check the status of files in current git repo. One you run this command it will show you the files being added and modified

```
git status
```

> .Git folder keeps all git related info. You can delete this folder to convert a git repo to normal folder.

## git add

Adds new or modified files to the staging area.

```
git add
```

> Use git add . or git add -a to add all files

## git commit

Commits the changes.

```
git commit -m "<msg>"
```

## git log

Logs the history of all the commits

```
git log
```

## Shorter commit messages

```
git log --oneline
```

## Change commit message editor vs code

```
git config --global core.editor "code --wait"
```

## Ammend commits

Helps in editing last commit msg with addition of new files.

```
git commit --ammend -m "<msg>"
```

## .gitignore

Create and add files and folder path you want to ignore.

# git best practices

1. Keep your commits atomic (follow SRP, single unit)
2. Present tense imperative style commit messages
