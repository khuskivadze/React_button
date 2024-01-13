import styles  from './Button.module.scss'

type  Props = {
    title  : string;
    className? : string;
    desibled?: boolean;
    mode? :  'fill' | 'outline';
}

export  default (props : Props) => {

    const  classes =  [styles.btContainer, props.className]    
    // join - ერეკიში ჩაშენებული მეთოფი რომელიც ერეის 
    //ყველა ელემენტს აიღებს, ერთ სტრინგში ჩაყრის  და მათ 
    //შორის მოათავებს გამოტოვებას;  
    //.trim() - მარჯვნიდან და მარცხნიდან მოაცილებს გამოტოვებს  სტრინგებს;
    // if (props.desibled) classes.push(styles.desibled)

    if(props.mode == 'outline') {
        classes.push(styles.outline)
    } else {
        classes.push(styles.fill)
    }

    
    return (
        <button disabled={props.desibled} 
           className={classes.join(' ').trim()}>
            {props.title}
        </button>
        
    )
 }