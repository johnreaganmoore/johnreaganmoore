class PostsController < ApplicationController

	def index
		@posts = Post.order("created_at DESC")
	end

	def show
	  @post = Post.find(params[:id])
	end

	def new
		@post = Post.new

		# respond_to do |format|
		# 	format.html
		# 	format.xml { render :xml => @post }
		# end
	end

	def create
		@post = Post.new(post_params)
		
		@post.save
		redirect_to @post
	end

	def edit
		@post = Post.find(params[:id])
	end

	def update
		@post = Post.find(params[:id])

		respond_to do |format|
			if @post.update_attributes(post_params)
				flash[:notice] = 'Boom! you edited that post!'
				format.html { redirect_to(@post) }
				format.xml  { head :ok }
			else
				format.html { render :action => "edit" }
				format.xml  { render :xml => @post.errors, :status => :unprocessable_entity }
			end
		end
	end

	private

	def post_params
	  params.require(:post).permit(:title, :text, :author, :publish_date)
	end
end
