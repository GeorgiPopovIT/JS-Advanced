function solution(){
    class Post{
        constructor(name, content){
            this.name = name;
            this.content = content;
        }

        toString(){
            return `Post: ${this.name}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post{
        constructor(name, content, likes, dislikes){
            super(name,content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(` * ${comment}`);
        }

        toString(){
            if(this.comments.length > 0) {
                return super.toString() + `\nRating: ${this.likes - this.dislikes}\nComments:\n${this.comments.join('\n')}`;
            }
            return super.toString() + `\nRating: ${this.likes - this.dislikes}`;
        }
    }
    class BlogPost extends Post{
        constructor(name, content, views){
            super(name,content);
            this.views = views;
        }

        view(){
            this.view++;
            return this.view;
        }

        toString(){
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost};
}

const classes = solution();
let post = new classes.Post("Post", "Content");
console.log(post.toString());
// Post: Post
// Content: Content
let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow!