interface HyperlinkProps {
    url: string;
    linkText: string;
}

// example: <Hyperlink url= 'https://google.com>' linkText='Google' />

const Hyperlink = ({url, linkText}: HyperlinkProps) => {

    return(
    <a className="hyperlink" href={url}>{linkText}</a>
    );
}

export default Hyperlink