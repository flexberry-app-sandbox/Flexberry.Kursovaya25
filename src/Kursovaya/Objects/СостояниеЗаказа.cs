﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Состояние заказа.
    /// </summary>
    // *** Start programmer edit section *** (СостояниеЗаказа CustomAttributes)

    // *** End programmer edit section *** (СостояниеЗаказа CustomAttributes)
    [AutoAltered()]
    [Caption("Состояние заказа")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СостояниеЗаказаE", new string[] {
            "КодСостояния as \'Код состояния\'",
            "Дата as \'Дата\'",
            "Статус as \'Статус\'"})]
    public class СостояниеЗаказа : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодСостояния;
        
        private System.DateTime fДата;
        
        private IIS.Kursovaya.СтатусЗаказа fСтатус;
        
        private IIS.Kursovaya.Заказ fЗаказ;
        
        // *** Start programmer edit section *** (СостояниеЗаказа CustomMembers)

        // *** End programmer edit section *** (СостояниеЗаказа CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (СостояниеЗаказа.Дата CustomAttributes)

        // *** End programmer edit section *** (СостояниеЗаказа.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (СостояниеЗаказа.Дата Get start)

                // *** End programmer edit section *** (СостояниеЗаказа.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (СостояниеЗаказа.Дата Get end)

                // *** End programmer edit section *** (СостояниеЗаказа.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СостояниеЗаказа.Дата Set start)

                // *** End programmer edit section *** (СостояниеЗаказа.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (СостояниеЗаказа.Дата Set end)

                // *** End programmer edit section *** (СостояниеЗаказа.Дата Set end)
            }
        }
        
        /// <summary>
        /// КодСостояния.
        /// </summary>
        // *** Start programmer edit section *** (СостояниеЗаказа.КодСостояния CustomAttributes)

        // *** End programmer edit section *** (СостояниеЗаказа.КодСостояния CustomAttributes)
        public virtual int КодСостояния
        {
            get
            {
                // *** Start programmer edit section *** (СостояниеЗаказа.КодСостояния Get start)

                // *** End programmer edit section *** (СостояниеЗаказа.КодСостояния Get start)
                int result = this.fКодСостояния;
                // *** Start programmer edit section *** (СостояниеЗаказа.КодСостояния Get end)

                // *** End programmer edit section *** (СостояниеЗаказа.КодСостояния Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СостояниеЗаказа.КодСостояния Set start)

                // *** End programmer edit section *** (СостояниеЗаказа.КодСостояния Set start)
                this.fКодСостояния = value;
                // *** Start programmer edit section *** (СостояниеЗаказа.КодСостояния Set end)

                // *** End programmer edit section *** (СостояниеЗаказа.КодСостояния Set end)
            }
        }
        
        /// <summary>
        /// Статус.
        /// </summary>
        // *** Start programmer edit section *** (СостояниеЗаказа.Статус CustomAttributes)

        // *** End programmer edit section *** (СостояниеЗаказа.Статус CustomAttributes)
        public virtual IIS.Kursovaya.СтатусЗаказа Статус
        {
            get
            {
                // *** Start programmer edit section *** (СостояниеЗаказа.Статус Get start)

                // *** End programmer edit section *** (СостояниеЗаказа.Статус Get start)
                IIS.Kursovaya.СтатусЗаказа result = this.fСтатус;
                // *** Start programmer edit section *** (СостояниеЗаказа.Статус Get end)

                // *** End programmer edit section *** (СостояниеЗаказа.Статус Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СостояниеЗаказа.Статус Set start)

                // *** End programmer edit section *** (СостояниеЗаказа.Статус Set start)
                this.fСтатус = value;
                // *** Start programmer edit section *** (СостояниеЗаказа.Статус Set end)

                // *** End programmer edit section *** (СостояниеЗаказа.Статус Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Kursovaya.Заказ.
        /// </summary>
        // *** Start programmer edit section *** (СостояниеЗаказа.Заказ CustomAttributes)

        // *** End programmer edit section *** (СостояниеЗаказа.Заказ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Заказ"})]
        public virtual IIS.Kursovaya.Заказ Заказ
        {
            get
            {
                // *** Start programmer edit section *** (СостояниеЗаказа.Заказ Get start)

                // *** End programmer edit section *** (СостояниеЗаказа.Заказ Get start)
                IIS.Kursovaya.Заказ result = this.fЗаказ;
                // *** Start programmer edit section *** (СостояниеЗаказа.Заказ Get end)

                // *** End programmer edit section *** (СостояниеЗаказа.Заказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СостояниеЗаказа.Заказ Set start)

                // *** End programmer edit section *** (СостояниеЗаказа.Заказ Set start)
                this.fЗаказ = value;
                // *** Start programmer edit section *** (СостояниеЗаказа.Заказ Set end)

                // *** End programmer edit section *** (СостояниеЗаказа.Заказ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СостояниеЗаказаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СостояниеЗаказаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СостояниеЗаказаE", typeof(IIS.Kursovaya.СостояниеЗаказа));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of СостояниеЗаказа.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfСостояниеЗаказа CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfСостояниеЗаказа CustomAttributes)
    public class DetailArrayOfСостояниеЗаказа : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Kursovaya.DetailArrayOfСостояниеЗаказа members)

        // *** End programmer edit section *** (IIS.Kursovaya.DetailArrayOfСостояниеЗаказа members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type СостояниеЗаказа by index.
        /// </summary>
        /// <summary>
        /// Adds object with type СостояниеЗаказа.
        /// </summary>
        public DetailArrayOfСостояниеЗаказа(IIS.Kursovaya.Заказ fЗаказ) : 
                base(typeof(СостояниеЗаказа), ((ICSSoft.STORMNET.DataObject)(fЗаказ)))
        {
        }
        
        public IIS.Kursovaya.СостояниеЗаказа this[int index]
        {
            get
            {
                return ((IIS.Kursovaya.СостояниеЗаказа)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Kursovaya.СостояниеЗаказа dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
