'''
Image categorizer for algorithm outputs
Run script as 
    
    python3 image_cat "folder with images"

'''
import sys
import shutil


def copy(source, destination):
    print(source)
    print("\n")
    print(destination)

if __name__ == "__main__":
    
    if len(sys.argv)==2:
        print("Provided source directory copying images in current directory")
    elif len(sys.argv)==3:
        print("Provided source directory and destination directory copying images to the provided destination")
    else:
        print("Invalid arguments")


    print(sys.argv[1])

