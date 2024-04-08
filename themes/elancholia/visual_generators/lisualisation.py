import math

millnames = ['',' K',' M',' B',' T']

def humanise(n):
    n = float(n)
    millidx = max(0,min(len(millnames)-1,
                        int(math.floor(0 if n == 0 else math.log10(abs(n))/3))))
    if n <= 999:
        return int(n)
    else:
        return '{:.1f}{}'.format(n / 10**(3 * millidx), millnames[millidx])

def make_sexy_circle(amounts: list, colours: list, destination: str, 
                     radius: float = 60, width_outer: float = 10,
                     circle_sep: float = 5) -> None:
    """ Returns a custom visual of a circle with lines around it presenting the
    proportional weight of each amount

    Args:
        amounts (list): List of amounts
        colours (list): List of colours. Last colour is used for the center circle.  
        destination (string): location of SVG file
        radius (float): radius of inner circle
        width_outer: width of outer circles
        circle_sep: seperation between inner circle and first outer circle and
        in between outer cirlces
    """
    pathLength = sum(amounts)
    number = len(amounts)
    
    # calculating coordinates and resolution
    width = (radius * 2) + (circle_sep * 2 * number) + (width_outer * 2 * number)
    height = width
    circle_x = width/2
    circle_y = height/2
    
    css = r'''<defs><style type="text/css">
        svg{
            font-family: "Open Sans", sans-serif;
            font-size: 30px;
        }
        
         .circle_stat{
            transform-box: fill-box;
            transform-origin: center;
            transform: rotate(-90deg);
        }
        </style></defs>
    '''
    
    svg = rf'''<svg xmlns:xlink="http://www.w3.org/1999/xlink" class = "{{ .class }}" viewBox="0 0 {width} {height}" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" version="1.1">
    ''' + css

    svg += rf'''    
        <g>
        <circle class="circle_stat" cx="{circle_x}px" cy="{circle_y}px" r="{radius}px" fill="{colours[-1]}" stroke="none" stroke-width="0px" />
        <text x="{circle_x}px" y="{circle_y}px" text-anchor="middle" fill="#ffffff" dy=".3em">{humanise(pathLength)}</text>
    '''
    
    # creating all the outer circles
    for i in range(number):
        svg += rf'''
            <circle class="circle_stat" cx="{circle_x}px" cy="{circle_y}px" r="{radius + (circle_sep * (i + 1)) + ((i+1) - 1/2) * width_outer}px" fill="none" stroke="{colours[i]}" stroke-width="{width_outer}px" pathLength="{pathLength}" stroke-dasharray="{amounts[i]}, {pathLength-amounts[i]}"/>
        '''
   
    svg += rf'''
        </g>
        </svg>
    '''
    
    with open(destination, 'w') as file:
        file.writelines(svg)